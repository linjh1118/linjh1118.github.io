# 网站图标

输入：`/Users/yzb/Desktop/icon.png`。使用内置 imagegen 编辑工具生成透明图标，再用 sips 导出标准尺寸。

采用 `coding-agent-data/assets/icon-options/robot-coding.png`：机器人、笔记本、大代码符号；舍弃仅头部方案，因为缺少编码含义。生成结果是参考原图重新整理的图标，不是逐像素抠图。

导航栏为 40px，源图导出至 `assets/brand-mark.png`（128px）；同时更新 16px、32px favicon、ICO 和 180px Apple touch icon。对比页为 `coding-agent-data/icon-options.html`。已在本地页面验证图标加载与导航栏显示。

最终提示词：

> Create a compact website logo by editing the supplied image of a coding robot. The logo must unmistakably communicate CODING AGENT, not a generic robot. Preserve the recognizable main robot's white rounded head, black face, cyan oval eyes and smile, and left circular ear/headphone, at its original three-quarter angle. Retain a simplified dark navy LAPTOP directly in front of the robot, with one VERY LARGE clear cyan </> code symbol on its lid facing the viewer, based on the original laptop. Robot head should fill upper 60 percent, laptop fills lower 35 percent and overlaps the bottom of the head slightly; hints of two hands allowed but no full body required. Compose as one tightly integrated compact square pictogram, nearly filling canvas with 6 percent margin. Remove all desk, chair, plants, mountain, mug, other robots, floating windows and scenery. Actual transparent alpha background. Simplify tiny shading/details for readability at 32 and 48 pixels while preserving the original friendly polished illustration character and thick dark contours. No extra text, no frame, no glow or shadow outside silhouette. Main priority: robot face AND large readable </> are both immediately recognizable at small size.
