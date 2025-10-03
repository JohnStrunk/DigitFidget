#! /bin/bash

set -e -o pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
TOP_DIR=$(cd "$SCRIPT_DIR/.." && pwd)

IGNORE_DIRS=(
	".git"
	".next"
    ".yarn"
    "dist"
	"node_modules"
	"out"
)

# This command ensures pre-commit is run on all modified files, not just those
# currently tracked by git. That allows linting of new files in addition to
# modified ones. It properly obeys .gitignore

# Build find arguments as an array to avoid quoting/word splitting issues
find_args=("$TOP_DIR" -type f)
for dir in "${IGNORE_DIRS[@]}"; do
	find_args+=( -not -path "$TOP_DIR/$dir/*" )
done
find "${find_args[@]}" | while IFS= read -r file; do
	if ! git check-ignore -q "$file"; then
		echo "$file"
	fi
done | xargs pre-commit run --files
