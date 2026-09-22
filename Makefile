.PHONY: help install start web dev build test clean

NPM ?= npm

ifeq ($(wildcard .env),)
$(info [warn] .env not found - copy .env.example to .env and fill in the EmailJS keys)
endif

help:
	@echo "Available targets:"
	@echo "  make web      Install deps if needed, then launch the dev server"
	@echo "  make start    Alias for make web"
	@echo "  make dev      Alias for make web"
	@echo "  make install  Install dependencies"
	@echo "  make build    Create a production build"
	@echo "  make test     Run the test suite once"
	@echo "  make clean    Remove node_modules and build output"

node_modules: package.json
	$(NPM) install
	@touch node_modules

install: node_modules

web: node_modules
	$(NPM) start

start: web

dev: web

build: node_modules
	$(NPM) run build

test: node_modules
	$(NPM) test -- --watchAll=false

clean:
	rm -rf node_modules build
