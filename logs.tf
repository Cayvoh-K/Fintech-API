provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "logs" {
  bucket = "fintech-compliance-logs-karigii"
}

resource "aws_s3_object" "transaction_logs" {
  bucket                 = aws_s3_bucket.logs.id
  key                    = "transactions.log"
  source                 = "${path.module}/logs/transactions.log"
  server_side_encryption = "AES256"
}

