import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(0); // Set timeout menjadi 60 detik

  // Login
  await page.goto('https://devidxrecord.idx.id/admin'); 
  
  // Isi username dan password
  await page.getByRole('textbox', { name: 'Username' }).fill('maker-ab-kmu');
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  // await page.waitForTimeout(6000);

  // Klik tombol login dan tunggu navigasi
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),
    page.getByRole('textbox').nth(3).click(),
  ]);


// Mulai Looping
for (let i = 0; i < 5; i++) {


  // Navigasi ke halaman Laptip
  await page.goto('https://devidxrecord.idx.id/admin/laporan-titipan');
  
  // Klik tombol "Create"
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[1]/a[1]').click();

  // Klik tombol "Add" dan isi data Laptip manual
  await page.locator('//button[@class="btn btn-success"]').click();

  // Locator Form
  const ABReceiver = page.locator('xpath=//*[@id="select2-ab_receiver-container"]');
  const Reason = page.locator('[name="alasan_permohonan_titipan"]');
  
  const NoTrx = page.locator('[name="norder_number[]"]');
  const Time = page.locator('[name="ntransaction_time[]"]');
  const secode = page.locator('[name="nkode_efek[]"]');
  const Market = page.locator('[name="nmarket_type[]"]');
  const volume = page.locator('[name="nvolume[]"]');
  const price = page.locator('[name="nprice[]"]');
  const OrderStatus = page.locator('[name="nstatus_order[]"]');
  const investorcode = page.locator('[name="ninvestor_code_nasabah[]"]');
  const investoreAB = page.locator('[name="ninvestor_code_ab[]"]');




  
  // Isi Form
  await ABReceiver.click();
  await page.keyboard.press('Enter');
  await Reason.click();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await NoTrx.fill(String(Math.floor(Math.random() * 10000)));
  // await NoTrx.fill('1802177');
  await Time.fill('10:00');
  await secode.fill('BMTR');
  await Market.selectOption('RG');
  await volume.fill('270');
  await price.fill('800');
  // await OrderStatus.selectOption('Jual');
  await investorcode.fill('Z70098');
  await investoreAB.fill('123');

  

  // Save
  await page.locator('button[type="submit"]').click();



  await page.waitForTimeout(5000);

// Hapus looping 
}

});