import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '카드 제목',
    description: '카드에 들어가는 설명 텍스트입니다. 컴포넌트의 기본 상태를 보여줍니다.',
  },
}

export const WithFooter: Story = {
  args: {
    title: '푸터가 있는 카드',
    description: '하단에 추가 정보를 표시할 수 있습니다.',
    footer: '2026-05-19 업데이트',
  },
}

export const LongContent: Story = {
  args: {
    title: '긴 내용의 카드',
    description:
      '이 카드는 설명이 긴 경우를 보여줍니다. 여러 줄의 텍스트가 들어가도 레이아웃이 유지되는지 확인할 수 있습니다. 텍스트가 충분히 길면 카드가 자연스럽게 늘어납니다.',
    footer: '작성자: 홍길동',
  },
}
