TSC_ARGS   =-target ES5
TSC        =node node_modules/typescript/bin/tsc $(TSC_ARGS)
LIB        =src/libex.d.ts
TEXTOR     =$(LIB) $(wildcard src/editor/*.ts)
SYNTAX_HTML=$(LIB) $(wildcard src/syntax/html/*.ts)
SYNTAX_JS  =$(LIB) $(wildcard src/syntax/js/*.ts)
SYNTAX_CSS =$(LIB) $(wildcard src/syntax/css/*.ts)

build: lib/textor.js lib/syntax/js.js lib/syntax/html.js lib/syntax/css.js

lib/textor.js: $(TEXTOR)
	$(TSC) -out $@ $^
lib/syntax/html.js: $(SYNTAX_HTML)
	$(TSC) -out $@ $^
lib/syntax/js.js: $(SYNTAX_JS)
	$(TSC) -out $@ $^
lib/syntax/css.js: $(SYNTAX_CSS)
	$(TSC) -out $@ $^

