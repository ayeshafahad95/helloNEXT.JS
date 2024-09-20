const Info=()=>{
    return (
        <div>
            <ol>
        
<li>📄 <b>PAGES/:</b> Each file here is automatically treated as a route. The index.tsx corresponds to the / route, and subdirectories create nested routes.
</li>
<li>🖥️ <b>_APP.TSX:</b> This file is used to customize the entire application's layout or to inject global data (e.g., state management).
</li>
<li>📜 <b>_DOCUMENT.TSX:</b> Used to customize the HTML document and add elements like html or body tags.
</li>
<li>
🧩 <b>COMPONENTS/:</b> A folder where reusable UI components like Header and About are stored. Although optional, it's crucial for organizing components.
</li>
<li>🖼️ <b>PUBLIC/:</b>Any static assets such as images, fonts, or icons are placed here and are accessible via /yourfile.
</li>
<li>🎨 <b>STYLES/:</b> Contains your global styles and component-specific CSS files.
</li>
<li>
⚙️ <b>NEXT.CONFIG.JS:</b> Contains configuration settings for Next.js, such as custom webpack settings.
</li>
</ol>
        </div>
    )
}

export default Info