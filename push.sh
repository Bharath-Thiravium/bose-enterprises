#!/bin/bash

# Bose Enterprises - Push to Vasan Branch
# Repository: https://github.com/Bharath-Thiravium/bose-enterprises.git
# Branch: vasan

echo "╔════════════════════════════════════════════════════════════════════════════╗"
echo "║                    PUSHING TO VASAN BRANCH                               ║"
echo "║                    Bose Enterprises Repository                           ║"
echo "╚════════════════════════════════════════════════════════════════════════════╝"
echo ""

cd /home/athenas/Downloads/BE

echo "Current Branch:"
git branch -v
echo ""

echo "Latest Commits:"
git log --oneline -3
echo ""

echo "Git Status:"
git status
echo ""

echo "═══════════════════════════════════════════════════════════════════════════════"
echo ""
echo "PUSHING TO REMOTE..."
echo ""

# Try to push with verbose output
git push -v BE vasan

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ PUSH SUCCESSFUL!"
    echo ""
    echo "Verify on GitHub:"
    echo "  https://github.com/Bharath-Thiravium/bose-enterprises/tree/vasan"
    echo ""
else
    echo ""
    echo "❌ PUSH FAILED - Authentication Required"
    echo ""
    echo "Please use one of these methods:"
    echo ""
    echo "1. GitHub CLI (Recommended):"
    echo "   gh auth login"
    echo "   git push BE vasan"
    echo ""
    echo "2. Personal Access Token:"
    echo "   git push https://<TOKEN>@github.com/Bharath-Thiravium/bose-enterprises.git vasan"
    echo ""
    echo "3. SSH (if configured):"
    echo "   git push git@github.com:Bharath-Thiravium/bose-enterprises.git vasan"
    echo ""
fi

echo "═══════════════════════════════════════════════════════════════════════════════"
