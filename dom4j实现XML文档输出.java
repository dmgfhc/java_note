import org.dom4j.*

Document document = DocumentHelper.createDocument(); // 创建了一个新的文档
Element areaplussElement = document.addElement("areapluss"); // 创建根节点
Element areaplusElement = areaplussElement.addElement("areaplus");
//此处使用迭代器迭代LIST中存放的内容
//LIST及VO对象实现在此处省略
while(iter.hasNext()) {
Element apidElement = areaplusElement.addElement("apid");
Element titleElement = areaplusElement.addElement("title");
apidElement.setText(String.valueOf(vo.getApid()));
titleElement.setText(String.valueOf(vo.getTitle()));
}

OutputFormat format = OutputFormat.createCompactFormat(); // 设置压缩格式
format.setEncoding("UTF-8"); // 设置编码为UTF-8
XMLWriter out = new XMLWriter(response.getWriter(), format);
out.write(document); // 输出XML