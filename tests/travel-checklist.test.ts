import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TravelChecklist from '../app/components/TravelChecklist.vue'

describe('travel checklist', () => {
  it('updates progress when an item is checked and unchecked', async () => {
    const checklist = mount(TravelChecklist)

    expect(checklist.text()).toContain('0 of 4 packed')

    const firstItem = checklist.get('input[type="checkbox"]')
    await firstItem.setValue(true)
    expect(checklist.text()).toContain('1 of 4 packed')

    await firstItem.setValue(false)
    expect(checklist.text()).toContain('0 of 4 packed')
  })
})
