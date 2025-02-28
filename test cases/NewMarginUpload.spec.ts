import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(60000); // Set timeout menjadi 60 detik

  // Login
  await page.goto('https://devidxrecord.idx.id/admin'); 
  
  // Isi username dan password
  await page.getByRole('textbox', { name: 'Username' }).fill('maker-hij');
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  // await page.waitForTimeout(6000);

  // Klik tombol login dan tunggu navigasi
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),
    page.getByRole('textbox').nth(3).click(),
  ]);


// Mulai Looping
// for (let i = 0; i < 2; i++) {


  // Navigasi ke halaman Margin
  await page.goto('https://devidxrecord.idx.id/admin/transaction-margin');
  
  // Klik tombol "Add New"
  await page.locator('.btn-add-new').click();

  // Locator Upload
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[1]/div/button').click();
  await page.locator('[name="upload_file"]').setInputFiles('/file_upload/template_margin.xlsx');
  

  // Save
  await page.locator('button[type="submit"]').click();



  await page.waitForTimeout(2000);

// Hapus looping 
// }

});