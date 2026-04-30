#!/bin/bash

echo "🚀 EnviroCore Community Platform - Development Setup"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
  echo "📝 Creating .env.local..."
  cat > .env.local << 'EOF'
VITE_API_URL=http://localhost:3001
# Add your Resend API key here: https://resend.com/api-keys
RESEND_API_KEY=
EOF
fi

echo ""
echo "✓ Setup complete!"
echo ""
echo "Starting development servers..."
echo "  - Frontend: http://localhost:3000 (Vite)"
echo "  - Backend: http://localhost:3001 (Express)"
echo ""
echo "Note: If you want real email sending:"
echo "  1. Sign up at https://resend.com"
echo "  2. Get your API key"
echo "  3. Add to .env.local: RESEND_API_KEY=re_xxxxx"
echo ""

npm run dev
