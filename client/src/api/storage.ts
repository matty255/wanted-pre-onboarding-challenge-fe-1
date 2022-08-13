export type storageProps = {
  key: string;
  persist: boolean;
  value?: string | "";
};

export type storageInnerProps = {
  set: ({ key, persist, value }: storageProps) => void;
  get: ({ key, persist }: storageProps) => string | undefined | null;
};

export const Storage: storageInnerProps = {
  set: ({ key, persist, value }: storageProps) => {
    if (persist === true) {
      sessionStorage.setItem(key, value || "");
    }
    if (persist === false) {
      localStorage.setItem(key, value || "");
    }
  },
  get: ({ key, persist }: storageProps) => {
    if (persist === true) {
      return sessionStorage.getItem(key);
    }
    if (persist === false) {
      return localStorage.getItem(key);
    }
  },
};
