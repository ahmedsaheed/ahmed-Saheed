---
title: "Leaflet"
description: "Minimal distractionless markdown editor!"
date: "2022-09-02T00:00:00"
---


Leaflet, a **minimal distractionless markdown editor** designed to quickly navigate between multiple `.md` files in a directory and its sub directories. It features a clean mathematical typesetting, chemical equation rendering, code blocks highlighting, writing statistics and a speed-reader.


I created this <a href="http://github.com/ahmedsaheed/Leaflet" target="_blank" rel="noreferrer" class="external ">application</a> to help me cope with note taking during school lectures as most of my lecturers spoke too fast. This application is made available as a free and <a href="https://github.com/ahmedsaheed/Leaflet" target="_blank" rel="noreferrer" class="external ">open source</a> software.


---

# Features

- **🖋 Editing**: Switch between editing and preview mode seemlessly

- **⚛️ Maths & Chemical Equation Typesetting**: Leaflet renders mathematical, physics and chemical equation out of the box.

- **Pandoc Support**: Easily export your `.md` files to `.pdf` and `.docx` files

- **📄 Uses Files**: Leaflet works with users file system directly instead of an external database.

- **🌙 Dark / Light Mode**: Supports your system specified theme.

- **✨ Simplicity**: Leaflet focuses on simplicity and provides only necessary features needed.


- **🕉 Bidirectional Text**: Automatically detect BIDI - text and displays logiaclly.

---

## Installation

You'd have to install [pandoc](https://github.com/jgm/pandoc/blob/master/INSTALL.md) to export `.md` to other formats.


<div align="center">
     <table>
    <tbody>
      <tr>
        <td>
          <a href="https://github.com/ahmedsaheed/Leaflet/releases/download/v0.0.3/Leaflet-0.0.3.dmg">
          <img src="https://api.iconify.design/simple-icons:apple.svg?color=%23888888"/>
          OS X Download</a>
        </td>
        <td>
          <a href="https://github.com/ahmedsaheed/Leaflet/releases/download/v0.0.3/Leaflet-Setup-0.0.3.exe">
          <img src="https://api.iconify.design/icomoon-free:windows.svg?color=%23888888"/>
          Windows Download</a>
        </td>
        <td>
          <a href="https://github.com/ahmedsaheed/Leaflet/releases/download/v0.0.3/leaflet_0.0.3_amd64.snap">
          <img src="https://api.iconify.design/codicon:terminal-ubuntu.svg?color=%23888888"/>
          Linux Downloads</a>
        </td>
      </tr>
    </tbody>
  </table>
  
</div>
  


You can also run Leaflet locally from the command line:

```bash
$ git clone https://github.com/ahmedsaheed/Leaflet.git && cd Leaflet
$ yarn install
$ yarn dev
```

Or Build 

```bash
$ git clone https://github.com/ahmedsaheed/Leaflet.git && cd Leaflet
$ yarn install
$ yarn build
```

---

# Demo

<p align="center">



<video src="https://user-images.githubusercontent.com/87912847/188292656-94da4c10-7fb3-464f-8fad-270b255afaee.mov" controls="controls">
</video>


</p>


---

# More Features

- Support media like `mp3`, `iframe` and `video` 
- Displays a table of content on demand
- Renders task list, tables and footnotes  quite nicely 
- File statistics displayed in the footer (speed-reader, word count, date).

## Extras
- Leaflet is strongly inspired by [Left](https://github.com/hundredrabbits/left) and [Opus](https://github.com/pacocoursey/Opus).
- Leaflet source code  licensed under [BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- Pull Requests are welcome!

