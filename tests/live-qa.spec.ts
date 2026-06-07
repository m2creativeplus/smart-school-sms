import { test, expect } from '@playwright/test';

test.describe('M2 Smart School SMS - Live QA Audit (Continuous Trainer)', () => {
  // Test core dashboard and navigation
  test('Dashboard loads successfully without 404', async ({ page }) => {
    // Navigate to dashboard
    const response = await page.goto('/admin/dashboard');
    
    // Assert 200 OK response (Not a 404)
    expect(response?.status()).toBe(200);
    
    // Assert page title or a key header text exists
    await expect(page.locator('h1').first()).toContainText('Dashboard');
  });

  // Verify core modules
  const coreModules = [
    { name: 'Student Information', url: '/admin/students', expectedHeader: 'Student Information' },
    { name: 'Fees Collection', url: '/admin/fees', expectedHeader: 'Collect Fees' },
    { name: 'Human Resource', url: '/admin/hr', expectedHeader: 'Staff Directory' },
    { name: 'Transport', url: '/admin/transport', expectedHeader: 'Transport' },
    { name: 'System Settings', url: '/admin/settings', expectedHeader: 'General Settings' }
  ];

  for (const module of coreModules) {
    test(`Module: ${module.name} loads correctly`, async ({ page }) => {
      const response = await page.goto(module.url);
      expect(response?.status()).toBe(200);
      
      // Verify page is not a Next.js 404 page
      const pageText = await page.locator('body').innerText();
      expect(pageText).not.toContain('404');
      expect(pageText).not.toContain('This page could not be found');
      
      // Verify expected header
      await expect(page.locator('h1').first()).toContainText(module.expectedHeader);
    });
  }
});
