import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: {
    label: '버튼',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { label: '확인' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: '확인' })
    await expect(btn).toBeVisible()
    await expect(btn).not.toBeDisabled()
  },
}

export const CssCheck: Story = {
  args: { label: '스타일 확인', variant: 'primary' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: '스타일 확인' })
    // btn--primary 는 background: var(--accent) = #aa3bff
    await expect(getComputedStyle(btn).borderRadius).toBe('6px')
  },
}

export const Secondary: Story = {
  args: { label: '취소', variant: 'secondary' },
}

export const Danger: Story = {
  args: { label: '삭제', variant: 'danger' },
}

export const Disabled: Story = {
  args: { label: '비활성화', disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: '비활성화' })).toBeDisabled()
  },
}

export const Small: Story = {
  args: { label: '작은 버튼', size: 'sm' },
}

export const Large: Story = {
  args: { label: '큰 버튼', size: 'lg' },
}
