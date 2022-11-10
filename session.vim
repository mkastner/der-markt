let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/projects/node.js/der-markt
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +8 package.json
badd +6 ~/projects/node.js/solid-test/package.json
badd +1 .babelrc.json
badd +10 src/App.jsx
badd +1 src/App.module.css
badd +18 vite.config.js
badd +12 site/index.layout.handlebars
badd +11 index.html
badd +17 ~/projects/node.js/fmh-simple-site/package.json
badd +4 site/index.template.hbs
badd +1 term://~/projects/node.js/der-markt//98583:vifm\ \ \ /Users/kastner/projects/node.js/der-markt\ \ \'--choose-files\'\ \'/var/folders/_z/_n_4w_9d1vn43s9d_zylb68m0000gn/T/nvim.kastner/1tNfog/23\'\ \'--on-choose\'\ \'echo\ \$VIFM_OPEN_TYPE\ >/var/folders/_z/_n_4w_9d1vn43s9d_zylb68m0000gn/T/nvim.kastner/1tNfog/24\'\ \'+command\ EditVim\ \ \ :let\ \$VIFM_OPEN_TYPE=\'/\'\'edit\'/\'\'\ \|\ execute\ \'/\'\'cnoremap\ j\ \<cr>\'/\'\'\ \|\ normal\ gs:editj\'\ \'+command\ VsplitVim\ :let\ \$VIFM_OPEN_TYPE=\'/\'\'vsplit\'/\'\'\ \|\ execute\ \'/\'\'cnoremap\ j\ \<cr>\'/\'\'\ \|\ normal\ gs:editj\'\ \'+command\ SplitVim\ \ :let\ \$VIFM_OPEN_TYPE=\'/\'\'split\'/\'\'\ \|\ execute\ \'/\'\'cnoremap\ j\ \<cr>\'/\'\'\ \|\ normal\ gs:editj\'\ \'+command\ DiffVim\ \ \ :let\ \$VIFM_OPEN_TYPE=\'/\'\'vert\ diffsplit\'/\'\'\ \|\ execute\ \'/\'\'cnoremap\ j\ \<cr>\'/\'\'\ \|\ normal\ gs:editj\'\ \'+command\ PeditVim\ \ :let\ \$VIFM_OPEN_TYPE=\'/\'\'pedit\'/\'\'\ \|\ execute\ \'/\'\'cnoremap\ j\ \<cr>\'/\'\'\ \|\ normal\ gs:editj\'\ \'+command\ TabVim\ \ \ \ :let\ \$VIFM_OPEN_TYPE=\'/\'\'tablast\ \|\ tab\ drop\'/\'\'\ \|\ execute\ \'/\'\'cnoremap\ j\ \<cr>\'/\'\'\ \|\ normal\ gs:editj\'
badd +9 site/scripts/index.html
badd +1 site/templates/index.template.hbs
badd +4 src/cookie-watch.jsx
badd +0 src/cookie-watch.css
badd +121 ~/projects/node.js/fmh-simple-site/site/css/index.scss
argglobal
%argdel
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit site/index.template.hbs
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
2wincmd k
wincmd w
wincmd w
wincmd w
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
2wincmd k
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 23 + 35) / 71)
exe 'vert 1resize ' . ((&columns * 82 + 83) / 166)
exe '2resize ' . ((&lines * 22 + 35) / 71)
exe 'vert 2resize ' . ((&columns * 82 + 83) / 166)
exe '3resize ' . ((&lines * 21 + 35) / 71)
exe 'vert 3resize ' . ((&columns * 82 + 83) / 166)
exe '4resize ' . ((&lines * 23 + 35) / 71)
exe 'vert 4resize ' . ((&columns * 83 + 83) / 166)
exe '5resize ' . ((&lines * 22 + 35) / 71)
exe 'vert 5resize ' . ((&columns * 83 + 83) / 166)
exe '6resize ' . ((&lines * 21 + 35) / 71)
exe 'vert 6resize ' . ((&columns * 83 + 83) / 166)
argglobal
balt vite.config.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 6 - ((5 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 018|
wincmd w
argglobal
if bufexists(fnamemodify("vite.config.js", ":p")) | buffer vite.config.js | else | edit vite.config.js | endif
if &buftype ==# 'terminal'
  silent file vite.config.js
endif
balt package.json
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 16 - ((12 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 16
normal! 07|
wincmd w
argglobal
if bufexists(fnamemodify("package.json", ":p")) | buffer package.json | else | edit package.json | endif
if &buftype ==# 'terminal'
  silent file package.json
endif
balt package.json
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 9 - ((5 * winheight(0) + 10) / 21)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("site/index.layout.handlebars", ":p")) | buffer site/index.layout.handlebars | else | edit site/index.layout.handlebars | endif
if &buftype ==# 'terminal'
  silent file site/index.layout.handlebars
endif
balt site/templates/index.template.hbs
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 12 - ((11 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 12
normal! 042|
wincmd w
argglobal
if bufexists(fnamemodify("src/App.jsx", ":p")) | buffer src/App.jsx | else | edit src/App.jsx | endif
if &buftype ==# 'terminal'
  silent file src/App.jsx
endif
balt src/App.module.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 7 - ((6 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 7
normal! 015|
wincmd w
argglobal
if bufexists(fnamemodify("src/App.jsx", ":p")) | buffer src/App.jsx | else | edit src/App.jsx | endif
if &buftype ==# 'terminal'
  silent file src/App.jsx
endif
balt .babelrc.json
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 10 - ((9 * winheight(0) + 10) / 21)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 10
normal! 014|
wincmd w
exe '1resize ' . ((&lines * 23 + 35) / 71)
exe 'vert 1resize ' . ((&columns * 82 + 83) / 166)
exe '2resize ' . ((&lines * 22 + 35) / 71)
exe 'vert 2resize ' . ((&columns * 82 + 83) / 166)
exe '3resize ' . ((&lines * 21 + 35) / 71)
exe 'vert 3resize ' . ((&columns * 82 + 83) / 166)
exe '4resize ' . ((&lines * 23 + 35) / 71)
exe 'vert 4resize ' . ((&columns * 83 + 83) / 166)
exe '5resize ' . ((&lines * 22 + 35) / 71)
exe 'vert 5resize ' . ((&columns * 83 + 83) / 166)
exe '6resize ' . ((&lines * 21 + 35) / 71)
exe 'vert 6resize ' . ((&columns * 83 + 83) / 166)
tabnext
edit index.html
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 82 + 83) / 166)
exe '2resize ' . ((&lines * 34 + 35) / 71)
exe 'vert 2resize ' . ((&columns * 83 + 83) / 166)
exe '3resize ' . ((&lines * 33 + 35) / 71)
exe 'vert 3resize ' . ((&columns * 83 + 83) / 166)
argglobal
balt site/scripts/index.html
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 12 - ((11 * winheight(0) + 34) / 68)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 12
normal! 027|
wincmd w
argglobal
if bufexists(fnamemodify("src/cookie-watch.css", ":p")) | buffer src/cookie-watch.css | else | edit src/cookie-watch.css | endif
if &buftype ==# 'terminal'
  silent file src/cookie-watch.css
endif
balt src/cookie-watch.jsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 6 - ((5 * winheight(0) + 17) / 34)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("src/cookie-watch.jsx", ":p")) | buffer src/cookie-watch.jsx | else | edit src/cookie-watch.jsx | endif
if &buftype ==# 'terminal'
  silent file src/cookie-watch.jsx
endif
balt index.html
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 5 - ((4 * winheight(0) + 16) / 33)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 022|
wincmd w
exe 'vert 1resize ' . ((&columns * 82 + 83) / 166)
exe '2resize ' . ((&lines * 34 + 35) / 71)
exe 'vert 2resize ' . ((&columns * 83 + 83) / 166)
exe '3resize ' . ((&lines * 33 + 35) / 71)
exe 'vert 3resize ' . ((&columns * 83 + 83) / 166)
tabnext 2
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
