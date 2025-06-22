import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access Dashboard' }).click()

  const toast = page.getByText(
    'We have sent an authentication link to your email.',
  )

  expect(toast).toBeVisible()

  await page.waitForTimeout(100)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access Dashboard' }).click()
  await expect(page.getByText('Invalid credentials.')).toBeVisible()
  await page.waitForTimeout(100)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New Establishment' }).click()

  expect(page.url()).toContain('/sign-up')
})
