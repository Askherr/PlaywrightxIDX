import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(0); // Set timeout menjadi 60 detik

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


  // Navigasi ke halaman Koreksi
  await page.goto('https://devidxrecord.idx.id/admin/transaction-correction');
  
  // Klik tombol "Add New"
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[1]/div[1]/button').click();
  // Pilih Jual atau Beli
  // await page.locator('select[name="type"]').selectOption('Jual');
  await page.locator('xpath=//*[@id="createTransactionNego"]/div/div/div[2]/form/div[2]/button').click();



  // Locator Form
  const KodeEfek = page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[3]/div/div/div/div/form/div[2]/div[2]/span/span[1]');
  const NoTrade = page.locator('[name="trade_number"]');
  const KodeAB = page.locator('[name="opposite_company_id"]');
  const Reason = page.locator('[name="reason_note"]');
  const CheckHarga = page.locator('#hargaCheck');
  const ExistPrice = page.locator('[name="existing_price"]');
  const ChangePrice = page.locator('[name="correction_price"]');

  const CheckVolume = page.locator('#volumeCheck');
  const ExistVolume = page.locator('[name="existing_volume"]');
  const ChangeVolume = page.locator('[name="correction_volume"]');
  
  // Isi Form
  await KodeEfek.click();
  await page.locator('xpath=/html/body/span/span/span[1]/input').fill('AKKU');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);
  expect(await page.locator('[name="security_name"]').getByText('Anugerah Kagum Karya Utama Tbk.')).toBeTruthy();
  await NoTrade.fill(String(Math.floor(Math.random() * 10000)));
  await KodeAB.selectOption('KMU');
  await Reason.fill('BEBAS');
  await CheckHarga.check();
  await ExistPrice.fill('1000');
  await ChangePrice.fill('2000');
  await CheckVolume.check();
  await ExistVolume.fill('100');
  await ChangeVolume.fill('200');


  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[3]/div/div/div/div/form/div[7]/button').click();



  await page.waitForTimeout(5000);
} // Hapus looping

});