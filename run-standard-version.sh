#!/bin/bash
# Get the commit message from the latest commit
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

# Kiểm tra xem commit message chứa "feat" hoặc "feature" không
if echo "$COMMIT_MESSAGE" | grep -qi "feat" && [ -z "$VERSION_BUMPED" ]; then
  # Xuất biến môi trường để thông báo về việc tăng version
  export VERSION_BUMPED=true
  # Chạy standard-version để tăng version
  npm run release
else
  # Commit message không chứa "feat" hoặc "feature"
  echo "Commit message must contain 'feat' or 'feature'."
fi
