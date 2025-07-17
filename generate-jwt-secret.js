// JWT Secret Generator
// Run this script to generate a secure JWT secret for production

import crypto from 'crypto';

function generateJWTSecret() {
  // Generate a 256-bit (32 bytes) random secret
  const secret = crypto.randomBytes(64).toString('hex');
  return secret;
}

console.log('🔐 Generated JWT Secret for Production:');
console.log('');
console.log('JWT_SECRET=' + generateJWTSecret());
console.log('');
console.log('⚠️  IMPORTANT: Keep this secret secure and never commit it to version control!');
console.log('💡 Use this in your Vercel environment variables.');

// Generate multiple secrets for different environments
console.log('');
console.log('📝 Additional secrets (if needed):');
console.log('Development: JWT_SECRET=' + generateJWTSecret());
console.log('Staging: JWT_SECRET=' + generateJWTSecret());
console.log('Production: JWT_SECRET=' + generateJWTSecret());
