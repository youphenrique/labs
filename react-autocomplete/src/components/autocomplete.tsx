import { Fragment, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Popper,
  TextField,
} from "@mui/material";

const MIN_SEARCH_CHARS = 4;
const DEFAULT_DELAY_IN_MS = 500;

type AutocompleteProps = {
  label: string;
  value: number | null;
  minChars?: number;
  debounceDelay?: number;
  isLoading: boolean;
  isFetched: boolean;
  search: string;
  items: Array<{ id: number; label: string }>;
  onSelectChange: (value: number | null) => void;
  errorMessage?: string;
  dispatchQuery: (inputSearch: string) => void;
};

export function Autocomplete(props: AutocompleteProps) {
  const { minChars = MIN_SEARCH_CHARS, debounceDelay = DEFAULT_DELAY_IN_MS } = props;
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedItemText, setSelectedItemText] = useState("");

  useEffect(() => {
    if (!isSelectOpen && props.search.length > 0 && props.isFetched) {
      setIsSelectOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.search, props.isFetched]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isSelectOpen &&
        inputRef.current &&
        popperRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !popperRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSelectOpen]);

  const debounced = useDebouncedCallback((value) => {
    props.dispatchQuery(value);
  }, debounceDelay);

  function onFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputSearch = e.target.value;
    setInputText(inputSearch);

    if (inputSearch.trim().length >= minChars) {
      debounced(inputSearch);
    } else if (debounced.isPending()) {
      debounced.cancel();
    } else if (inputSearch.length === 0 && isSelectOpen) {
      props.dispatchQuery("");
      setIsSelectOpen(false);
    }
  }

  function onFieldBlur() {
    if (props.value !== null) {
      setInputText(selectedItemText);
    }
  }

  function onFieldFocus() {
    if (!isSelectOpen && props.search.length > 0 && props.value === null) {
      setIsSelectOpen(true);
    }
  }

  function clearField() {
    setInputText("");
    setSelectedItemText("");
    props.dispatchQuery("");
    props.onSelectChange(null);
  }

  return (
    <Box>
      <TextField
        ref={inputRef}
        value={inputText}
        label={props.label}
        fullWidth
        onFocus={onFieldFocus}
        margin="normal"
        autoComplete="off"
        onBlur={onFieldBlur}
        onChange={onFieldChange}
        error={!!props.errorMessage}
        helperText={props.errorMessage}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {props.isLoading ? (
                  <CircularProgress size="1.5rem" disableShrink sx={{ animationDuration: "0.5s" }} />
                ) : props.value !== null ? (
                  <IconButton onClick={clearField}>
                    <ClearIcon />
                  </IconButton>
                ) : null}
              </InputAdornment>
            ),
          },
        }}
      />
      <Popper
        ref={popperRef}
        id="simple-popper"
        open={isSelectOpen}
        anchorEl={inputRef.current}
        sx={{ width: "24rem", zIndex: 1 }}
      >
        <List
          sx={{
            border: 1,
            bgcolor: "background.paper",
            borderRadius: "4px",
            maxHeight: "20rem",
            overflowY: "auto",
            borderColor: "rgba(0, 0, 0, 0.23)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            top: props.errorMessage ? "-23px" : 0,
          }}
        >
          {props.items.length === 0 ? (
            <ListItem>
              <ListItemText primary="Nenhum resultado encontrado" />
            </ListItem>
          ) : (
            props.items.map((item, index) => (
              <Fragment key={item.id}>
                {index > 0 ? <Divider /> : null}
                <ListItem
                  onMouseDown={(e) => {
                    e.preventDefault();
                    props.onSelectChange(item.id);
                    setInputText(item.label);
                    setSelectedItemText(item.label);
                    setIsSelectOpen(false);
                  }}
                  sx={{
                    cursor: "pointer",
                    bgcolor: props.value === item.id ? "#90caf9" : "white",
                    ":hover": { bgcolor: props.value === item.id ? "#90caf9" : "#e0e0e0" },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              </Fragment>
            ))
          )}
        </List>
      </Popper>
    </Box>
  );
}
