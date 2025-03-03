import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(120000); // Set timeout menjadi 60 detik

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
for (let i = 0; i < 5; i++) {


  // Navigasi ke halaman Trading
  await page.goto('https://devidxrecord.idx.id/admin/transaction-trading');
  
  // Klik tombol "Add New"
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[1]/div[1]/a').click();

  await page.waitForTimeout(3000);
  // Klik tombol "Add" dan isi data manual
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[3]/div/div/div/div/form/div[4]/a').click();

  // Locator Form
  const Noorder = page.locator('[name="order_number[]"]');
  // const Notransaction = page.locator('[name="ntransaction_number[]"]');
  // const waktu =  page.locator('[name="ntransaction_time[]"]');
  const BS = page.locator('[name="transaction_type[]"]');
  const secode = page.locator('[name="security_code[]"]');
  const pasar = page.locator('[name="board[]"]');
  const trade1 = page.locator('[name="existing_tradingid[]"]');
  const trade2 = page.locator('[name="changed_tradingid[]"]');
  const reason = page.locator('[name="reason_note"]');

  
  // Isi Form
  await Noorder.fill(String(Math.floor(Math.random() * 10000)));
  await secode.selectOption('BNII');
  await pasar.selectOption('RG');
  await BS.selectOption('Jual');

  await trade1.fill(String(Math.floor(Math.random() * 10000)));
  await trade2.fill(String(Math.floor(Math.random() * 10000)));
  await reason.fill('Koreksi TRD');

  // Save
  await page.locator('button[type="submit"]').click();



  // await page.waitForTimeout(4000);

// Hapus looping 
}

});