export type NullableType<T> = T | null;

export type GoogleProfileType = {
  email: NullableType<string>;
  familyName: NullableType<string>;
  givenName: NullableType<string>;
  id: NullableType<string>;
  name: NullableType<string>;
  photo: NullableType<string>;
};

export type InitStateType = {
  profile: GoogleProfileType;
};
