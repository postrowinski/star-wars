import { useAppDispatch } from "./../redux/store";
import { useEffect } from "react";
import { setTitle } from "../redux/common/reducer";

export const useSetHeadTitle = (title?: string): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (title) {
      dispatch(setTitle(title));
    }
  }, [title]);
};
