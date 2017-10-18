# 使用 vim 进行前端开发


        赵文博

# 目录

* 基本配置
* Mode
* 移动 Motion
* 操作 Operators
* Text Object
* 寄存器 Register
* Buffer、Window 和 Tab
* mapping
* 插件系统
* 前端 IDE

# vim 的好处

- 可以登录到开发机/服务器编辑
- 大文件处理

# vim 发行版

- vi
- vim
- neovim
- gvim
- macvim

# 基本配置

- vim: ~/.vimrc
- neovim: ~/.config/nvim/init.vim

# Mode

- normal
- insert
- visual
- command

# visual

- v: character select
- V: line select
- Ctrl+v: column select
- o: other end

# 移动 Motion

- h j k l
- 0 ^ $
- w b
- gg G 
- g^ gm g$
- :123
- %
- Ctrl+o

# 操作 Operators

- c change
- d delete
- y yank
- ~ swap case
- = auto indent
- > shift right
- < shift left
- ! external command

# Operators 用法

- Normal Mode:
    <operator> <motion>
    <count> <operator> <motion>

- Visual Mode:
    <select> <operator>

# filters

- :r read file/buffer
  - :r !ls
  - :r !date
  - :r !cal

- % process all
  - :%!cut -d ' ' -f0,1

- g find and process
  - g/pattern/d
  - s/pattern/other/gc

- '<,'> selection

# special motion: text object

- aw: a word
- iw: inner word
- a<: a <> block
- i<: inner <> block
- a(: a () block
- a{: a {} block
- a": a "" block
- at: a XML/HTML tag

# [count] <operator> <motion>

# 寄存器 register

- 存放临时文本
- :registers
- "" unamed register 默认
- "0 yank regiter
- 粘贴复制的内容
  - "0p
  - Ctrl-R 0


# 窗口管理

- buffer: the in-memory text of a file.
- window: viewport on a buffer.
- tab: collection of windows.

# buffer

- :ls
- :e #2
- :bd
- :bufdo %s/foo/bar/g

# window

- :sp
- :vsp
- Ctrl-W hjkl
- Ctrl-W x 2

# tab

- :tabnew
- gt

# stdin

vim -

# mapping

- :map <F2> :ls<CR>
- :noremap
- :nnoremap
- :imap

# 插件系统

- 目录
- Plugin Manager
  - https://github.com/junegunn/vim-plug
  - https://github.com/VundleVim/Vundle.vim
  - https://github.com/tpope/vim-pathogen
  - https://github.com/Shougo/neobundle.vim
- https://vimawesome.com/

# 前端 IDE

项目级别的代码编辑

# 项目配置

exrc

# 项目文件

- NerdTree
- CtrlP

# 项目代码查找和替换

- :grep
- :bufdo

# 代码提示

- nvim-completion-manager
- tern

# 智能补全

* emmet
* auto-pairs

# 语法检查

- ale
- eslint

# 格式化

- autoindent
- prettier-eslint

# 重构

- tern-rename

# Thanks

😀

