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

  it('adds personal items after the essentials and includes them in progress', async () => {
    const checklist = mount(TravelChecklist)

    await checklist.get('input[type="text"]').setValue('Sunscreen')
    await checklist.get('form').trigger('submit')

    const items = checklist.findAll('li')
    expect(items.map(item => item.text())).toEqual([
      'Travel documents',
      'Phone charger',
      'Medication',
      'Clothes',
      'Sunscreen'
    ])
    expect(checklist.text()).toContain('0 of 5 packed')

    await items[4].get('input[type="checkbox"]').setValue(true)
    expect(checklist.text()).toContain('1 of 5 packed')
  })

  it('trims a personal item label and clears the input after adding', async () => {
    const checklist = mount(TravelChecklist)
    const input = checklist.get('input[type="text"]')

    await input.setValue('  Sunscreen  ')
    await checklist.get('form').trigger('submit')

    expect(checklist.findAll('li').at(-1)?.get('span').element.textContent).toBe('Sunscreen')
    expect(input.element.value).toBe('')
  })

  it('rejects whitespace-only personal items with a validation message', async () => {
    const checklist = mount(TravelChecklist)

    await checklist.get('input[type="text"]').setValue('   ')
    await checklist.get('form').trigger('submit')

    expect(checklist.findAll('li')).toHaveLength(4)
    expect(checklist.get('[role="alert"]').text()).toBe('Enter an item.')
  })

  it('rejects a case-insensitive duplicate of an existing item', async () => {
    const checklist = mount(TravelChecklist)

    await checklist.get('input[type="text"]').setValue('travel DOCUMENTS')
    await checklist.get('form').trigger('submit')

    expect(checklist.findAll('li')).toHaveLength(4)
    expect(checklist.get('[role="alert"]').text()).toBe(
      'This item is already on your checklist.'
    )
  })
})
