import { Return } from "ts-toolbelt/out/Function/Return";
import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends
  | {
      parse: () => infer P;
    }
  | {
      extract: () => infer P;
    }
  | (() => infer P)
  ? P
  : never;

type Dream = GetParserResult<typeof parser1>;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
