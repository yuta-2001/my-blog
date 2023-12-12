-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "blog_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tags" TEXT[],
    "url" TEXT NOT NULL,
    "og_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_blog_id_key" ON "Blog"("blog_id");
