��һ��.sqlע�������
1.�޸����ݿ⣬ID�������Ϊ3(int����)��
2.��models/newsSql.js��models/userSql.js�ļ��в�ѯ��������?��ʽ���ڣ�ռλ��

������.XSS������
1.ǰ̨home.js�ļ��У�AJAX����url�Ĳ���ʹ��encodeURIComponent���б��룻
2.��̨express�У����յĲ�������decodeURIComponent���룬Ȼ��ʹ���Զ����html_encode�������ַ�����ת�룬�洢��mysql���ݿ⣻
3.ǰ̨��ȡ���ݿ��е����ݣ��Զ���ת��������ַ������Ӧ��html

�Ҳ��Ե�����У�
<img src=0 onerror=alert(0)>
<script>alert(1)</script>
�����ţ�˫���ţ��ң�&�� ���� \ /
��ͨ�����ԣ�������ʾ���ı��У�������

������.CSRF������
ʹ����csurf���������֤token

PS:��localhostҳ�����ʹ��ע��������е�¼��Ҳ����ʹ����Ԥ�����ʺţ�admin  ���룺123
