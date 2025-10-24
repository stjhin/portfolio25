import React from 'react'
// Inject a tiny inline script to ensure first paint is dark for new visitors
// without relying on system preference. If there's no stored mode, set it to dark
// and add the class immediately to avoid any flash of light.
export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		// Runs in the <head> before body script paints, so first render is dark
		<script
			key="force-dark-first-paint"
			dangerouslySetInnerHTML={{
				__html:
					"(function(){try{var k='theme-ui-color-mode';if(!localStorage.getItem(k)){localStorage.setItem(k,'dark');document.documentElement.classList.add('theme-ui-dark');}}catch(e){}})();",
			}}
		/>,
	])
}

export {}
