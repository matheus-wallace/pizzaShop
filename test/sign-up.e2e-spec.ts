import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Establishment name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your best e-mail').fill('johndoe@example.com')
  await page.getByLabel('Phone').fill('123812641264')

  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Establishment successfully registered!')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Establishment name').fill('Invalid name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your best e-mail').fill('johndoe@example.com')
  await page.getByLabel('Phone').fill('123812641264')

  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Error registering establishment.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
})
