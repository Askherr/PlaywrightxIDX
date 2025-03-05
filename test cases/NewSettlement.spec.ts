import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(10000000); // Set timeout menjadi 60 detik

  // Login
  await page.goto('https://devidxrecord.idx.id/admin'); 
  
  // Isi username dan password
  await page.getByRole('textbox', { name: 'Username' }).fill('maker-ab-bbb');
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  // await page.waitForTimeout(6000);

  // Klik tombol login dan tunggu navigasi
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),
    page.getByRole('textbox').nth(3).click(),
  ]);


// Mulai Looping
for (let i = 0; i < 5; i++) {


  // Navigasi ke halaman Settlement
  await page.goto('https://devidxrecord.idx.id/admin/transaction-settlements');
  
  // Klik tombol "Add New"
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[1]/div[1]/button').click();
  // Pilih Jual atau Beli
  await page.locator('xpath=//form[@action="https://devidxrecord.idx.id/admin/transaction-settlement/create"]//select[@name="type"]').selectOption('Beli');
  await page.locator('xpath=//button[contains(text(),"Create")]').click();


  // Form Locator
  const TrxDate = page.locator('[name="transaction_date"]');
  const NamaEfek = page.locator('[name="security_name"]');
  const KodeEfek = page.locator('[name="security_code"]');
  const NoTrx = page.locator('[name="trade_number"]');
  const ABLawan = page.locator('[name="opposite_company_id"]');
  // const NamaAB = page.locator('[name="opposite_company_name"]');
  const DateBefore = page.locator('[name="existing_date"]');
  const DateAfter = page.locator('[name="correction_date"]');
  const MethodBefore = page.locator('[name="existing_method"]');
  const MethodAfter = page.locator('[name="correction_method"]');
  const Reason = page.locator('[name="reason_note"]');
  const Notes = page.locator('[name="correction_notes"]');


  // Isi Form
  await TrxDate.fill('05/03/2025');
  await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
  await NamaEfek.fill('AKU ADALAH AKU');
  await KodeEfek.fill('AKKU');
  await NoTrx.fill(String(Math.floor(Math.random() * 10000)));
  await ABLawan.selectOption('KMU');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
  await Reason.fill('BEBAS');
  await Notes.fill('BERAS');
  await DateBefore.fill('05/03/2025');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
  await DateAfter.fill('06/03/2025');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
  await MethodBefore.selectOption('V01');
  await MethodAfter.selectOption('V02');


//   // Save
  await page.locator('button[type="submit"]').click();



  await page.waitForTimeout(2000);

// Hapus looping 
}

});