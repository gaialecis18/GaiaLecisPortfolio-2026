#!/bin/bash

# convert all pngs in the current dir (and subdirs) to jpg
for file in $(find . -name "*.png"); do
  if [ -f "$file" ]; then
    # Get the filename without the extension
    filename="${file%.*}"
    # Convert to jpg using ImageMagick
    convert "$file" "${filename}.jpg"
    echo "Converted $file to ${filename}.jpg"
  else
    echo "No PNG files found in the current directory."
  fi
donegit 