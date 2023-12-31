import { ChangeEvent, FC } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { fetchCharactersThunk } from "../../action/characters.actions";
import { IRootState } from "../../store/store";
import "./filters.css";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

/**
 * Characters filter component
 *
 * @returns {React.ReactElement} JSX element
 */
const Filters: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const query = useSelector((state) => state.characters.query);
    const dispatch = useDispatch<any>();
  
    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
      let query = e.target.value;
      //dispatch(fetchCharactersThunk(query));
      dispatch(fetchCharactersThunk(query));
    };
  
    return (
      <div className="filters">
        <label htmlFor="filter">Filtrar por nombre:</label>
        <input
          type="text"
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          onChange={onChange}
          value={query}
          name="filter"
          autoFocus={true}
        />
      </div>
    );
  };
  
  export default Filters;