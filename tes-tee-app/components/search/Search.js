import * as React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../icons/Search';
import * as S from './Search.style';

/**
 * @param {SearchProps} props
 * @returns {React.ReactNode}
 * @constructor
 */
export default function Search(props) {
  const { focused, value, onChange } = props;
  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <S.SearchRoot>
      <S.SearchIconBox>
        <SearchIcon />
      </S.SearchIconBox>
      <S.SearchInputLabel>
        <S.SearchInput
          ref={inputRef}
          type="text"
          placeholder="Looking for something?"
          value={value}
          onChange={ev => onChange(ev.target.value)}
        />
      </S.SearchInputLabel>
    </S.SearchRoot>
  );
}

Search.defaultProps = {
  focused: false,
};

Search.propTypes = {
  focused: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
