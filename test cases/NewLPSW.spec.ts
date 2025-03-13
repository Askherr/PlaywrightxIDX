import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(60000); // Set timeout menjadi 60 detik

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
for (let i = 0; i < 3; i++) {


  // Navigasi ke halaman LPSW
  await page.goto('https://devidxrecord.idx.id/admin/short-selling-lp-sws');
  
  // Klik tombol "Create"
  await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[1]/a[1]').click();

  // Klik tombol "Add" dan isi data LPSW manual
  await page.locator('//button[@class="btn btn-success"]').click();

  // Locator Form
  const TrxDate = page.locator('[name="ntransaction_date[]"]');
  const NoTrx = page.locator('[name="norder_number[]"]');
  const Board = page.locator('[name="nboard[]"]');
  const secode = page.locator('[name="ncode_effect[]"]');
  const volume = page.locator('[name="nvolume[]"]');
  const price = page.locator('[name="nprice[]"]');
  // const TrxDateDerivatif = page.locator('[name="nderivative_date[]"]');
  const Waran = page.locator('[name="nwaran_series[]"]');
  const RKonversi = page.locator('[name="nconvert_ratio[]"]');
  const Toutstanding = page.locator('[name="ntotal_outstanding[]"]');
  const PME = page.locator('[name="npme[]"]');



  
  // Isi Form
  await TrxDate.click();
  await page.keyboard.press('Enter');
  await NoTrx.fill('1000');
  // await NoTrx.fill(String(Math.floor(Math.random() * 10000)));
  await Board.selectOption('RG');
  await secode.fill('PLAY');
  await volume.fill('200');
  await price.fill('300');


  await Waran.fill('UIA100');
  await RKonversi.fill('1:5');
  await Toutstanding.fill('100000');
  await PME.fill('URAA');

  // Save
  await page.locator('button[type="submit"]').click();



  await page.waitForTimeout(5000);

// Hapus looping 
}

});