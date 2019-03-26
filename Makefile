NPM ?= $(shell command -v npm 2> /dev/null)

PLUGIN_ID ?= gfycat
PLUGIN_VERSION ?= 0.0.1

all: dist

.PHONY: build
build:
	cd webapp && $(NPM) install && ./node_modules/.bin/webpack --mode=production

.PHONY: dist
dist: build
	rm -rf dist
	mkdir -p dist/gfycat/webapp/dist
	cp plugin.json dist/gfycat/
	cp -r webapp/dist/* dist/gfycat/webapp/dist/
	cd dist && tar czf $(PLUGIN_ID)-$(PLUGIN_VERSION).tar.gz gfycat

.PHONY: clean
clean:
	rm -rf dist
