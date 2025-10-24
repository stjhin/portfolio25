// Bridge file: ensure environments that prefer .js resolve the real TS theme.
// Forward without extension so webpack/Gatsby resolves .ts/.tsx as configured.
try {
	const mod = require('./index')
	module.exports = mod && mod.default ? mod.default : mod
} catch (e) {
	throw new Error('Theme UI theme forwarder: could not resolve ./index. ' + (e && e.message ? e.message : e))
}

