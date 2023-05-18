import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Client } from './entities/client.entity';

import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async create(clientDto: ClientDto) {
    const client = await this.clientRepository.create(clientDto);
    await this.clientRepository.save(client);
    return client;
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(id: string) {
    return await this.clientRepository.findOne({ where: { id } });
  }

  async update(id: string, clientDto: Partial<ClientDto>) {
    await this.clientRepository.update({ id }, clientDto);
    return await this.clientRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    await this.clientRepository.delete({ id });
    return { deleted: true };
  }
}
