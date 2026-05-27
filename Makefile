.PHONY: help install start web dev build test

NPM ?= npm

help:
	@echo "Available targets:"
	@echo "  make install  Install dependencies"
	@echo "  make start    Launch the React development server"
	@echo "  make web      Alias for make start"
	@echo "  make dev      Alias for make start"
	@echo "  make build    Create a production build"
	@echo "  make test     Run the React test suite once"

install:
	$(NPM) install

start:
	$(NPM) start

web: start

dev: start

build:
	$(NPM) run build

test:
	$(NPM) test -- --watchAll=false
