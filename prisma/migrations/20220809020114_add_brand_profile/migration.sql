-- CreateTable
CREATE TABLE "BrandProfile" (
    "id" TEXT NOT NULL,

    CONSTRAINT "BrandProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandToUser_AB_unique" ON "_BrandToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandToUser_B_index" ON "_BrandToUser"("B");

-- AddForeignKey
ALTER TABLE "_BrandToUser" ADD CONSTRAINT "_BrandToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToUser" ADD CONSTRAINT "_BrandToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
