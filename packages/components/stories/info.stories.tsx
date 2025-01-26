import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "../info";

const meta: Meta<typeof Info> = {
  title: "Components/Info",
  component: Info,
  argTypes: {
    infoList: {
      control: "object",
      description: "个人信息列表",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Info>;

export const PersonalInfo: Story = {
  args: {
    infoList: [
          { title: "姓名", content: "张三" },
          { title: "年龄", content: "25" },
          { title: "学历", content: "硕士研究生" },
          { title: "专业", content: "计算机科学与技术" },
          { title: "学校", content: "清华大学" },
          { title: "联系邮箱", content: "zhangsan@example.com" },
      ]  
  },
};
