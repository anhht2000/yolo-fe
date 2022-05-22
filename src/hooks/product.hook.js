import { useCallback, useMemo } from "react";
import { useAppDispatch } from "./redux.hook";
import { fetchWithLock } from "../redux/reducers/common.reducer";
import { API } from "../constants/api.constants";

const useProduct = () => {
  const dispatch = useAppDispatch();

  /**
   *API login
   * @param payload
   */
  const getProduct = useCallback(
    (payload) => {
      const { successCallback, errorCallback, page, per_page, name, ...data } = payload;
      try {
        const method = "GET";

        dispatch(
          fetchWithLock({
            data: {
              url: API.PRODUCT,
              method,
              params: {
                page,
                limit:per_page,
                name,
              },
            },
            successCallback,
            errorCallback,
          })
        );
      } catch (error) {
        errorCallback && errorCallback(error);
      }
    },
    [dispatch]
  );

  return useMemo(() => ({ getProduct }), [getProduct]);
};

export default useProduct;
