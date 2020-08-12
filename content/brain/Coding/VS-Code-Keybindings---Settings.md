---
title: "VS Code Keybindings & Settings"
category: Coding
id: 8f628b9d3860454b880e349a86af9834
parent_id: 6be11330728443899a77512a88e15be8
created_at: 1594067072624
---



keybindings

```
// Place your key bindings in this file to override the defaults
[
    // Activity Bar shortcuts
    {
        "key": "cmd+k cmd+p",
        "command": "workbench.view.explorer"
    },
    {
        "key": "cmd+k cmd+s",
        "command": "workbench.view.search"
    },
    {
        "key": "cmd+k cmd+v",
        "command": "workbench.view.scm"
    },
    {
        "key": "cmd+k cmd+d",
        "command": "workbench.view.debug"
    },
    {
        "key": "cmd+k cmd+x",
        "command": "workbench.extensions.action.showInstalledExtensions"
    },

    /**
    * File Explorer
    **/
    {
        "key": "cmd+d",
        "command": "duplicate.execute",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus"
    },
    {
        "key": "cmd+n",
        "command": "explorer.newFile",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "shift+cmd+n",
        "command": "explorer.newFolder",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "cmd+r",
        "command": "workbench.files.action.refreshFilesExplorer",
        "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },

    /**
    * Git
    **/
    {
        "command": "git.commit",
        "when": "activeViewlet == 'workbench.view.scm'",
        "key": "cmd+enter"
    },
    
    /**
    * Terminal
    **/
    {
        "command": "workbench.action.terminal.toggleTerminal",
        "key": "cmd+t"
    },
]
```

settings

```
{
    "editor.fontFamily": "JetBrains Mono, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontSize": 13,
    "debug.console.fontSize": 13,
    "editor.letterSpacing": 1.2,
    
    // Remove the ""NOISE""
    "workbench.activityBar.visible": false,
    "workbench.editor.showTabs": false, 
    "workbench.sideBar.location": "right",
    "workbench.statusBar.visible": false,
    "editor.minimap.enabled": false,
    "window.zoomLevel": 0,

    /** Spelling **/
    /** Taken from: https://www.coderedcorp.com/blog/spell-check-vscode/ **/

    // Only spell check the following file types, ignore all others.
    "spellright.documentTypes": [
        "markdown",
        "restructuredtext",
        "latex",
        "plaintext",
        "html"
    ],

    // Within those file types, ignore the following sections.
    "spellright.ignoreRegExps": [
        // ignore code blocks (surrounded by at least one backtick)
        "/`+([\\s\\S\\w\\W]+?)`+/g",
        // ignore code blocks (rst double colon)
        "/::\\n\\n([\\s\\S\\w\\W]+?)(?=\\n\\S)/g",
        // ignore code-blocks (rst double period)
        "/\\.\\. code\\-block::[\\s\\w]*\\n\\n([\\s\\S\\w\\W]+?)(?=\\n\\S)/g",
        // ignore string assignment (e.g. HTML tag properties)
        "/\\w+\\s*\\=+\\s*[\"\\']+.+[\"\\']+/g"
    ],

    // Within HTML files specifically
    "spellright.ignoreRegExpsByClass": {
        "html": [
            // ignore Django/Jinja template tags
            "/\\{[\\{\\%\\#].+[\\#\\%\\}]\\}/g",
            // ignore script tag contents
            "/<script.*?>([\\s\\S\\w\\W]*?)</script>/g",
            // ignore style tag contents
            "/<style>([\\s\\S\\w\\W]*?)</style>/g",
            // ignore actual HTML tags, but not the contents.
            "/<[\\s\\S\\w\\W]+?>/g"
        ]
    },

    // Never check the following file extensions, even if VS Code thinks they are plaintext.
    "spellright.ignoreFiles": [
        "**/.gitignore",
        "**/.spellignore",
        "*.toml"
    ],
    
}
```
                