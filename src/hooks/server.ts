import { useCallback, useEffect, useRef, useState } from "react";

export function usePromise<T, U extends any[]>(
  operation: (...args: U) => Promise<T>,
  opt:
    | { call: true; args: U; deps: any[] }
    | { call: false | undefined; args?: U; deps?: any[] }
) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);
  const mounted = useRef<boolean>(true);

  const deps = opt.deps || [];
  const args = opt.args || [];

  const invoke = useCallback(
    (...args: U) => {
      setLoading(true);
      operation(...args)
        .then((res) => {
          if (mounted.current) {
            setError(undefined);
            setData(res);
          }
        })
        .catch((err) => mounted.current && setError(err))
        .finally(() => mounted.current && setLoading(false));
    },
    [...deps]
  );

  useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  useEffect(() => {
    if (opt.call) {
      invoke(...opt.args);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoke, opt.call]);

  const _reset = useCallback(() => {
    setData(undefined);
    setError(undefined);
    setLoading(false);
  }, []);

  return { invoke, data, loading, error, _reset } as const;
}
