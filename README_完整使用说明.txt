Darin Portfolio v190 完整使用说明
==================================================

本版本修复重点
--------------------------------------------------
v190 修复了上一个压缩包只包含 index.html 和说明文件的问题。

这版压缩包内已经包含完整目录：

index.html
README_完整使用说明.txt
assets/
  config/
    site-data.js
  videos/
  works/
  projects/
    project-01/
    project-02/
    ...
    project-30/
  contact/
tools/
  compress_images.py
  compress_images_mac.command

注意：
assets/videos、assets/works、assets/contact、assets/projects/project-01 等文件夹里有隐藏的 .gitkeep 文件，用来保证空文件夹在压缩包里存在。
Mac Finder 默认不会显示 .gitkeep，这是正常的。


一、本地预览方式
--------------------------------------------------
不要直接双击 index.html。

正确方式：

1. 打开 Mac「终端」。
2. 输入 cd 加空格。
3. 把整个项目文件夹拖进终端窗口。
4. 回车。
5. 运行：

python3 -m http.server 8080

6. 浏览器打开：

http://localhost:8080

如果 8080 被占用，可以用：

python3 -m http.server 8090

然后打开：

http://localhost:8090


二、素材缓存问题
--------------------------------------------------
如果替换了同名图片或视频，但页面还显示旧图：

打开：

assets/config/site-data.js

找到：

ASSET_VERSION:'v1',

改成：

ASSET_VERSION:'v2',

或：

ASSET_VERSION:'20260702-1',

然后刷新页面。

本地打开时，右下角会显示版本号，例如：

v190 / assets v1

如果没有看到 v190，说明打开的不是这个最新版。


三、首屏视频
--------------------------------------------------
首屏视频固定路径：

assets/videos/hero-avatar.mp4

你只需要把视频放到：

assets/videos/

并改名为：

hero-avatar.mp4


四、作品滚动区
--------------------------------------------------
真实源图只需要 10 张：

assets/works/work-01.jpg
assets/works/work-02.jpg
...
assets/works/work-10.jpg

页面会自动重复 3 轮：

10 张源图 × 3 轮 = 30 个滚动 tile

这是为了无缝循环，不需要准备 work-11 到 work-30。


五、项目卡片
--------------------------------------------------
项目卡片预设 30 个：

assets/projects/project-01/
assets/projects/project-02/
...
assets/projects/project-30/

每个项目封面固定叫：

cover.jpg

例如：

assets/projects/project-01/cover.jpg


六、启用或关闭项目
--------------------------------------------------
打开：

assets/config/site-data.js

找到对应项目，例如 project-07：

// enabled:true,

删除前面的两个斜杠，变成：

enabled:true,

这个项目就会显示。

关闭项目则反过来，把：

enabled:true,

改成：

// enabled:true,


七、项目详情图片
--------------------------------------------------
每个项目默认写好 detail-01.jpg 到 detail-10.jpg。

例如：

assets/projects/project-01/detail-01.jpg
assets/projects/project-01/detail-02.jpg
...
assets/projects/project-01/detail-10.jpg

你只要把图片放进对应项目文件夹，并改成对应文件名，就会显示。
没放的 detail 图片会自动隐藏。


八、项目详情横屏视频
--------------------------------------------------
横屏视频示例：

{type:'video',src:'assets/projects/project-04/horizontal-video-01.mp4'},

放到：

assets/projects/project-04/horizontal-video-01.mp4


九、三列竖屏图片 / 视频
--------------------------------------------------
一行三列：

{
  layout:'triple',
  items:[
    {type:'image',src:'assets/projects/project-04/vertical-01.jpg'},
    {type:'video',src:'assets/projects/project-04/vertical-video-01.mp4'},
    {type:'image',src:'assets/projects/project-04/vertical-02.jpg'}
  ]
}

一行两个也可以，会自动居中：

{
  layout:'triple',
  items:[
    {type:'video',src:'assets/projects/project-04/vertical-video-01.mp4'},
    {type:'video',src:'assets/projects/project-04/vertical-video-02.mp4'}
  ]
}

竖屏图片和视频会完整显示，不裁切底部。
三列整体会略微缩小并增加间距。


十、视频项目卡顿修复
--------------------------------------------------
v190 包含 v189 的视频性能修复：

1. 项目详情里只有当前可见区域附近的视频自动播放。
2. 离开可见区域的视频会自动暂停。
3. 关闭查看项目时会暂停并卸载视频资源。
4. 关闭后会解除 body/html 的滚动锁定。
5. 避免视频很多的项目退出后网页无法滚动或卡顿。


十一、联系版块图片
--------------------------------------------------
联系图片固定路径：

assets/contact/contact-card.png

图片缩放在 site-data.js 里改：

CONTACT_IMAGE_SCALE:1,

0.9 = 缩小到 90%
1.1 = 放大到 110%


十二、图片压缩工具
--------------------------------------------------
上传 GitHub / Netlify 前建议压缩图片。

第一次先安装 Pillow：

python3 -m pip install pillow

然后运行：

python3 tools/compress_images.py

它会把 assets 中超过 3MB 的图片尽量压缩到 3MB 以内。


十三、上传 GitHub / Netlify
--------------------------------------------------
上传 GitHub 时，仓库根目录应该是：

index.html
assets/
tools/
README_完整使用说明.txt

不要变成：

portfolio_formal_v190_full_folders/
  index.html
  assets/

Netlify：
1. Add new site
2. Import an existing project
3. 选择 GitHub 仓库
4. Build command 留空
5. Publish directory 留空或填 /
6. Deploy site


十四、常见错误
--------------------------------------------------
1. 图片不显示：
检查文件名是否完全一致。
project-01 不要写成 project-1。
detail-01.jpg 不要写成 detail-1.jpg。
大小写必须一致。

2. 视频不显示：
检查 mp4 是否能单独播放。
检查路径是否写对。
确认用 http://localhost:8080 打开，不要双击 HTML。

3. 仍显示旧图：
改 ASSET_VERSION。

4. 修改后没变化：
Command + Shift + R 强制刷新。


十五、v192 补充：项目卡片封面完整显示
--------------------------------------------------
v192 已把项目卡片封面恢复为完整显示逻辑：

- 不使用填满裁切。
- 不使用 object-fit:cover。
- 只限定图片宽度为卡片宽度。
- 高度按照图片自身比例自动变化。
- 图片是多少比例，就显示多少比例。
- 效果恢复为 v190 的自然高度显示方式。

适用位置：
项目卡片封面 cover.jpg。

不影响：
查看项目里的 detail 图片、横屏视频、竖屏视频。


十六、v193 补充：导航栏“联系”跳转修复
--------------------------------------------------
之前的问题：
如果还没有滚动查看完所有项目卡片，直接点击导航栏“联系”，页面看起来会跳到某个项目卡片，而不是联系版块。

原因：
项目卡片区域有层叠效果，项目卡片的层级高于联系版块。
浏览器锚点实际已经接近联系版块，但视觉上仍然被项目卡片盖住。

v193 已修复：
- 联系版块层级提高到项目卡片之上。
- 导航栏内部跳转改为 JS 精准计算滚动位置。
- 点击“联系”时会临时把联系版块置顶。
- 不需要先手动滚动完所有项目卡片，也可以直接跳到联系版块。

使用方式不变：
直接点击导航栏“联系”即可。
