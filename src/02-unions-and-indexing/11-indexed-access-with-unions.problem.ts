import { Includes } from "ts-toolbelt/out/Object/Includes";
import { Equal, Expect } from "../helpers/type-utils";
import { Union } from "ts-toolbelt";
import { UnionOf } from "ts-toolbelt/out/Object/UnionOf";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type Type = typeof programModeEnumMap;
export type IndividualProgram = (typeof programModeEnumMap)[
  | "ONE_ON_ONE"
  | "PLANNED_ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_SELF_DIRECTED"];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
