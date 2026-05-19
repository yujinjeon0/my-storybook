import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  component: Badge,
  tags: ['ai-generated'],
  args: { label: '상태', color: 'purple' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Purple: Story = { args: { label: '활성' } }
export const Green: Story = { args: { label: '완료', color: 'green' } }
export const Red: Story = { args: { label: '오류', color: 'red' } }
export const Gray: Story = { args: { label: '비활성', color: 'gray' } }
