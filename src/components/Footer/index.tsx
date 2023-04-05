import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  // const defaultMessage = '蚂蚁集团体验技术部出品';
  // const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '个人网站：BXuan随笔',
          href: 'https://bxuannotes.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/BXuan-Yang',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
