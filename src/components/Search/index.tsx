import styles from "./Search.module.scss";
interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      className={styles.inputSearch}
    />
  );
};

export default Search;
