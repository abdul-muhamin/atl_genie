module.exports = {

"[project]/src/services/chat/config.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "pineconeIndex": ()=>pineconeIndex
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$10_$40$babel$2b$core$40$7$2e$25$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.10_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pinecone$2d$database$2b$pinecone$40$2$2e$2$2e$2$2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@pinecone-database+pinecone@2.2.2/node_modules/@pinecone-database/pinecone/dist/index.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const pinecone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$pinecone$2d$database$2b$pinecone$40$2$2e$2$2e$2$2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pinecone"]({
    apiKey: process.env.PINECONE_API_KEY
});
// const model = new OpenAI({ temperature: 0, model: "gpt-3.5-turbo-16k" });
// const chatModel = new ChatOpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);
;

})()),
"[project]/src/services/chat/conversation.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "converse": ()=>converse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$prompts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+core@0.2.21_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_enco_zg2sypcxpcpumqlj5ff6p7hafq/node_modules/@langchain/core/prompts.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+core@0.2.21_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_enco_zg2sypcxpcpumqlj5ff6p7hafq/node_modules/@langchain/core/dist/prompts/prompt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$openai$40$0$2e$0$2e$34_encoding$40$0$2e$1$2e$13_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomen_bkxgm3md24zhozis5ib5v6ccaa$2f$node_modules$2f40$langchain$2f$openai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+openai@0.0.34_encoding@0.1.13_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomen_bkxgm3md24zhozis5ib5v6ccaa/node_modules/@langchain/openai/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$openai$40$0$2e$0$2e$34_encoding$40$0$2e$1$2e$13_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomen_bkxgm3md24zhozis5ib5v6ccaa$2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+openai@0.0.34_encoding@0.1.13_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomen_bkxgm3md24zhozis5ib5v6ccaa/node_modules/@langchain/openai/dist/chat_models.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$openai$40$0$2e$0$2e$34_encoding$40$0$2e$1$2e$13_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomen_bkxgm3md24zhozis5ib5v6ccaa$2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$embeddings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+openai@0.0.34_encoding@0.1.13_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomen_bkxgm3md24zhozis5ib5v6ccaa/node_modules/@langchain/openai/dist/embeddings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__@langchain_6dw7mk7y3bu4t4judeeru2po4y/node_modules/langchain/document.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+core@0.2.21_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_enco_zg2sypcxpcpumqlj5ff6p7hafq/node_modules/@langchain/core/dist/documents/document.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$util$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__@langchain_6dw7mk7y3bu4t4judeeru2po4y/node_modules/langchain/util/document.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$dist$2f$util$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__@langchain_6dw7mk7y3bu4t4judeeru2po4y/node_modules/langchain/dist/util/document.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$10_$40$babel$2b$core$40$7$2e$25$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.10_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13$2f$node_modules$2f40$gomomento$2f$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@gomomento+sdk@1.93.0_encoding@0.1.13/node_modules/@gomomento/sdk/dist/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$community$40$0$2e$2$2e$24_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f$gqwdbszlsl6btvvpomje3vqhni$2f$node_modules$2f40$langchain$2f$community$2f$caches$2f$momento$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+community@0.2.24_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__gqwdbszlsl6btvvpomje3vqhni/node_modules/@langchain/community/caches/momento.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$community$40$0$2e$2$2e$24_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f$gqwdbszlsl6btvvpomje3vqhni$2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$caches$2f$momento$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+community@0.2.24_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__gqwdbszlsl6btvvpomje3vqhni/node_modules/@langchain/community/dist/caches/momento.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$tools$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+core@0.2.21_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_enco_zg2sypcxpcpumqlj5ff6p7hafq/node_modules/@langchain/core/tools.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@langchain+core@0.2.21_langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_enco_zg2sypcxpcpumqlj5ff6p7hafq/node_modules/@langchain/core/dist/tools/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$output_parsers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__@langchain_6dw7mk7y3bu4t4judeeru2po4y/node_modules/langchain/output_parsers.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$dist$2f$output_parsers$2f$http_response$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/langchain@0.2.13_@gomomento+sdk-core@1.93.0_@gomomento+sdk@1.93.0_encoding@0.1.13__@langchain_6dw7mk7y3bu4t4judeeru2po4y/node_modules/langchain/dist/output_parsers/http_response.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chat$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/chat/config.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
const instructions = `
  Act like an agent from AlphatechLogics, a software services company and answer the user queries accordingly.
  If a user asks if we can develop something they want to, mention the projects that are similar to the user's requirements as an example.
  If a user asks about particular technology/niche, check if its available in the context you have. IF available, give answers accordingly. ELSE IF NOT AVAILABLE in the context, check if a similar/niche technology is available in the context and present that to the user
  If you need more information about the technologies client is looking for, feel free to ask them and narrow down the client's requirements before checking the context.
  If a user asks for bugdet/timeline for a project ask them to schedule a call with alphatechlogics representative and also give them the RipeSee's Contact Us and Get a Quote links (https://alphatechlogics.com/).
  In your response do not include the steps or logic you are taking to conclude the answer.
  Your responses should include the relevant information and not the words like context, chat history, etc.
  If you are mentioning multiple projects, mention them as a numbered list ONLY IF there are multiple projects.
  Make sure assistant response is ALWAYS in markdown format.
  Provide a paragraph where necessary, List where necessary, and code block with code language for syntax highlighting where code is needed.
  Note: If user asks something NOT related to alphatechlogics, excuse them politely and ask them to ask the relevant questions.
`;
const questionPrompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$prompts$2f$prompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PromptTemplate"].fromTemplate(`Use the following pieces of context to answer the question at the end.
----------
INSTRUCTIONS: {instructions}
----------
CONTEXT: {context}
----------
CHAT HISTORY: {chatHistory}
----------
QUESTION: {question}
----------
Helpful Answer:`);
async function initializeCache() {
    try {
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13$2f$node_modules$2f40$gomomento$2f$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CacheClient"]({
            configuration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13$2f$node_modules$2f40$gomomento$2f$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Configurations"].Laptop.v1(),
            credentialProvider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13$2f$node_modules$2f40$gomomento$2f$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CredentialProvider"].fromEnvironmentVariable({
                environmentVariableName: 'MOMENTO_API_KEY'
            }),
            defaultTtlSeconds: 60 * 60 * 24
        });
        const cache = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$community$40$0$2e$2$2e$24_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f$gqwdbszlsl6btvvpomje3vqhni$2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$caches$2f$momento$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MomentoCache"].fromProps({
            client,
            cacheName: 'ask-alphatechlogics'
        });
        return cache;
    } catch (error) {
        console.warn('Failed to initialize cache:', error);
        return null;
    }
}
const getMeetingTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tool"])(async ()=>{
    return 'BOOK_MEETING';
}, {
    name: 'book_meeting_call_appointment',
    description: 'If someone want to talk, books calls, meetings, appointments, or any meet-up with AlphatechLogics'
});
const getChain = async (apiKey)=>{
    const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$dist$2f$output_parsers$2f$http_response$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpResponseOutputParser"]();
    // Try to initialize cache, but continue without it if it fails
    const cache = await initializeCache().catch(()=>null);
    const chatModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$openai$40$0$2e$0$2e$34_encoding$40$0$2e$1$2e$13_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomen_bkxgm3md24zhozis5ib5v6ccaa$2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatOpenAI"]({
        ...cache && {
            cache
        },
        apiKey,
        model: 'gpt-4o-mini',
        streaming: true
    });
    const func_chatModel = chatModel.bindTools([
        getMeetingTool
    ]);
    const chain = questionPrompt.pipe(func_chatModel).pipe(parser);
    return chain;
};
const serializeChatHistory = (chatHistory)=>{
    return chatHistory.map((chatMessage)=>{
        if (chatMessage.role === 'user') {
            return `Human: ${chatMessage.content}`;
        } else if (chatMessage.role === 'assistant') {
            return `Assistant: ${chatMessage.content}`;
        } else {
            return `${chatMessage.content}`;
        }
    }).join('\n');
};
function converse(message, context, idArray, openAIApiKey, isAskATLChat = false) {
    return new ReadableStream({
        async start (controller) {
            const question = message;
            const chatHistory = await serializeChatHistory(context);
            const embeddings = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$openai$40$0$2e$0$2e$34_encoding$40$0$2e$1$2e$13_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomen_bkxgm3md24zhozis5ib5v6ccaa$2f$node_modules$2f40$langchain$2f$openai$2f$dist$2f$embeddings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OpenAIEmbeddings"]({
                openAIApiKey
            });
            const vector = await embeddings.embedQuery(question);
            let serializedDocs = '';
            if (idArray[0] !== null) {
                const docs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chat$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pineconeIndex"].query({
                    vector,
                    topK: 5,
                    filter: {
                        id: {
                            $in: idArray
                        }
                    },
                    includeMetadata: true
                });
                serializedDocs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_encoding$40$0$2e$1$2e$13_$5f40$langchain_6dw7mk7y3bu4t4judeeru2po4y$2f$node_modules$2f$langchain$2f$dist$2f$util$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDocumentsAsString"])(docs.matches.map((doc)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$0$2e$2$2e$21_langchain$40$0$2e$2$2e$13_$40$gomomento$2b$sdk$2d$core$40$1$2e$93$2e$0_$40$gomomento$2b$sdk$40$1$2e$93$2e$0_enco_zg2sypcxpcpumqlj5ff6p7hafq$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$document$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Document"]({
                        metadata: doc.metadata,
                        pageContent: doc.metadata?.text?.toString() || ''
                    })));
            }
            const questionGeneratorInput = {
                chatHistory,
                context: serializedDocs,
                question,
                instructions: isAskATLChat ? instructions : ''
            };
            const stream = (await getChain(openAIApiKey)).streamEvents(questionGeneratorInput, {
                version: 'v1'
            });
            for await (const chunk of stream){
                if (chunk?.event === 'on_parser_stream') {
                    const data = chunk?.data.chunk;
                    controller.enqueue(data);
                } else if (chunk.event === 'on_llm_end') {
                    const data = chunk?.data?.output?.generations[0];
                    console.log('Tool end:', chunk?.data?.output?.generations[0]);
                    if (Array.isArray(data) && data[0]?.message?.tool_calls && data[0].message.tool_calls[0]?.name === 'book_meeting_call_appointment') {
                        controller.enqueue('BOOK_MEETING');
                    }
                }
            }
            controller.close();
        }
    });
}

})()),
"[project]/src/app/api/chat/send-message/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chat$2f$conversation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/chat/conversation.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
async function POST(request, response) {
    try {
        // indexId is the id of the document index
        const { apiKey, messages, indexId, chatId } = await request.json();
        // Documents chat
        const streamedResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chat$2f$conversation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["converse"])(messages[messages.length - 1].content, messages, [
            indexId
        ], apiKey);
        return new Response(streamedResponse, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
    } catch (err) {
        if (err instanceof Error) {
            return new Response(err.message, {
                status: 400
            });
        }
        return new Response('Something went wrong', {
            status: 500
        });
    }
}

})()),

};

//# sourceMappingURL=src_d37d3b._.js.map