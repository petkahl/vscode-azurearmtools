// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
// ----------------------------------------------------------------------------

// tslint:disable:no-unused-expression

import * as assert from "assert";

import * as Json from "../src/JSON";
import * as language from "../src/Language";

import { ParameterDefinition } from "../src/ParameterDefinition";

suite("ParameterDefinition", () => {
    suite("constructor(Json.Property)", () => {
        test("with null", () => {
            assert.throws(() => { new ParameterDefinition(null); });
        });

        test("with undefined", () => {
            assert.throws(() => { new ParameterDefinition(undefined); });
        });

        test("with property with no metadata", () => {
            const parameterName = new Json.StringValue(new language.Span(0, 13), "parameterName")
            const parameterDefinition = new Json.ObjectValue(new language.Span(16, 2), []);
            const property = new Json.Property(parameterName.span.union(parameterDefinition.span), parameterName, parameterDefinition);
            const pd = new ParameterDefinition(property);
            assert.deepStrictEqual(pd.name, parameterName);
            assert.deepStrictEqual(pd.description, null);
            assert.deepStrictEqual(pd.span, new language.Span(0, 18));
        });
    });
});
